import React, { ChangeEvent, useState } from "react"
import {
  ArrowRight,
  Check,
  Cross,
  Facebook,
  Github,
  Globe,
  Linkedin,
  Plus,
  PlusCircle,
  Image,
} from "lucide-react"

import { Editor, Element, Frame, useEditor } from "@/lib/craftjs"
import { useAppDispatch, useAppSelector } from "@/lib/state/flows-state/hooks"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScreensList from "@/components/user/screens/screens-list.component"
import { SettingsPanel } from "@/components/user/settings/user-settings.components"
import { UserToolbox } from "@/components/user/settings/user-toolbox.component"
import { UserText } from "@/components/user/text/user-text.component"

import { ProgressBar } from "../progress-bar.component"
import { Input } from "../ui/input"
import { ScrollArea } from "../ui/scroll-area"
import { Button as UserButton } from "../user/button/user-button.component"
import { Card, CardTop } from "../user/card/user-card.component"
import {
  Container,
  UserContainer,
} from "../user/container/user-container.component"
import { IconButton } from "../user/icon-button/user-icon-button.component"
import { DragDrop } from "../user/screens/drag-drop-screens.component"
import { ButtonChoiceScreen } from "../user/screens/screen-button-choice.component"
import { ScreenFooter } from "../user/screens/screen-footer.component"
import { ScreenHeader } from "../user/screens/screen-header.component"
import { ScreenOneChoice } from "../user/screens/screen-one-choice.component"
import { ScreenOneInput } from "../user/screens/screen-one-input.component"
import { addScreen } from "@/lib/state/flows-state/features/placeholderScreensSlice"
import { RenderNode } from "../user/settings/render-node"
import { Logo } from "../user/logo/user-logo.component"
import { LogoBar, LogoBarItem } from "../user/logo-bar/logo-bar.component"
import { PictureChoice } from "../user/picture-choice/picture-choice.component"
import { MultipleChoice } from "../user/multiple-choice/user-multiple-choice.component"
import { HeadlineText } from "../user/headline-text/headline-text.component"
import { UserInput } from "../user/input/user-input.component"
import { array, sideBar } from "@/constant/index"
import { TArrItem, TSideBarItem } from "@/types"
enum VIEWS {
  MOBILE = "mobile",
  DESKTOP = "desktop",
}
const SaveButton = () => {
  const {
    query,
    query: { node },
  } = useEditor()
  const headerId = useAppSelector((state) => state.screen.headerId)
  //screen header id is: HeT6HrWBxJ
  const nodeTree = node(headerId).toNodeTree()
  nodeTree.nodes = NodesToSerializedNodes(nodeTree.nodes)
  console.log("NODE TREE IS: ", nodeTree)
  return (
    <a
      className="fixed left-3 top-3 z-10 bg-black p-3 text-white"
      onClick={() => console.log(query.serialize())}
    >
      Get JSON
    </a>
  )
}
const NodesToSerializedNodes = (nodes) => {
  // getSerializedNodes is present in the useEditor hook
  const {
    query: { getSerializedNodes },
  } = useEditor()
  const serializedNodes = getSerializedNodes()
  const result = {}
  Object.keys(nodes).forEach((key) => {
    result[key] = serializedNodes[key]
  })
  return result
}
export function CreateFlowComponent() {
  const [view, setView] = React.useState<string>(VIEWS.DESKTOP)
  const currentScreen = useAppSelector(
    (state) => state.screen.screens[state.screen.selectedScreen]
  )
  const selectedScreen = useAppSelector((state) => state.screen.selectedScreen)
  const dispatch = useAppDispatch()

  const [arr, setArr] = React.useState<TArrItem[]>(array)
  const [listSelected, setListSelected] = React.useState<boolean>(false)
  const [sideBarArray, setSideBar] = React.useState<TSideBarItem[]>(sideBar)
  return (
    <div className="max-h-[calc(-60px+100vh)] w-full">
      <Editor
        onNodesChange={(nodes) => {
          console.log("NODES CHANGED: ", nodes)
          console.log(
            "New nodes are: ",
            JSON.stringify(nodes.getSerializedNodes())
          )
        }}
        resolver={{
          Logo,
          HeadlineText,
          UserText,
          UserButton,
          ButtonChoiceScreen,
          ScreenHeader,
          UserInput,
          ScreenFooter,
          ScreensList,
          ScreenOneChoice,
          ProgressBar,
          ScreenOneInput,
          Input,
          Button,
          ArrowRight,
          Check,
          Cross,
          Facebook,
          Github,
          Globe,
          Linkedin,
          Container,
          Card,
          CardTop,
          UserContainer,
          IconButton,
          DragDrop,
          UserToolbox,
          Image,
          PictureChoice,
          MultipleChoice,
          LogoBar,
          LogoBarItem,
        }}
        onRender={RenderNode}
      >
        <div className="flex h-full min-h-screen flex-row justify-between gap-0">
          <ScrollArea className="max-h-screen basis-[3%] overflow-y-auto border-r   px-4 py-4 pl-0">
            <div className=" flex w-full flex-col items-center ">
              {sideBarArray.map((side, index) => (
                <div
                  onClick={() => {
                    if (index === 1) {
                      setListSelected(true)
                    } else {
                      setListSelected(false)
                    }
                    setSideBar((prev) => {
                      const array = prev.map((item, i) => ({
                        ...item,
                        selected: i === index ? true : false,
                      }))
                      return array
                    })
                  }}
                  className={`my-2 flex cursor-pointer flex-col items-center justify-center  p-1 transition-colors duration-500 hover:bg-gray-400 hover:text-white ${
                    side.selected ? "bg-gray-400 " : ""
                  }`}
                >
                  {side.img}
                </div>
              ))}
              {/* <div className="bg-gray-300-400 my-2 flex flex-col items-center justify-center p-[3px]">
                <svg viewBox="0 0 140 140" className="h-auto w-full">
                  <path d="M21 21c-.583 1.167-1.167 2.333-1.167 3.5v47.833c0 2.334 1.75 4.084 4.084 4.084h35c2.333 0 4.083-1.75 4.083-4.084V24.5c0-2.333-1.75-4.083-4.083-4.083h-35c-.584-.584-1.75 0-2.917.583zM115.5 19.833h-35c-2.333 0-4.083 1.75-4.083 4.084V45.5c0 2.333 1.75 4.083 4.083 4.083h35c2.333 0 4.083-1.75 4.083-4.083v-21c.584-2.333-1.75-4.667-4.083-4.667zM62.417 119c.583-.583 1.166-1.75 1.166-2.917V94.5c0-2.333-1.75-4.083-4.083-4.083h-35c-2.333 0-4.083 1.75-4.083 4.083v21.583c0 2.334 1.75 4.084 4.083 4.084h35c.583 0 1.75-.584 2.917-1.167zM115.5 63.583h-35c-2.333 0-4.083 1.75-4.083 4.084V115.5c0 2.333 1.75 4.083 4.083 4.083h35c2.333 0 4.083-1.75 4.083-4.083V67.667c.584-2.334-1.75-4.084-4.083-4.084z"></path>
                </svg>{" "}
              </div>
              <div className="bg-gray-300-400 my-2 flex flex-col items-center justify-center p-[3px]">
                <svg viewBox="0 0 140 140" className="h-auto w-full">
                  <path d="M13.2 71C24.7 82.5 41.9 86.1 57 80.1c1.1-.4 2.3-.2 3.1.6l54.4 54.5c5.8 5.7 15.1 5.6 20.7-.2 1.2-1.2 2.2-2.7 2.9-4.2 2.4-5.7 1-12.3-3.5-16.6L80.5 60c-.8-.8-1-2-.6-3.1 5.9-15.1 2.3-32.3-9.3-43.8C59.9 2.2 43.9-2 29.1 2.4c-.4.1-.8.4-1.2.7-1.1 1.1-1.1 3 0 4.1L48.6 28c.6.6.9 1.5.8 2.3L48 45.4c-.1 1.4-1.2 2.5-2.6 2.6l-15.1 1.4c-.9.1-1.7-.2-2.3-.8L7.3 27.9c-.3-.3-.7-.6-1.2-.7-1.5-.5-3.2.3-3.7 1.9C-2 44 2.2 60.1 13.2 71z"></path>
                </svg>
              </div>
              <div className="bg-gray-300-400 my-2 flex flex-col items-center justify-center p-[3px]">
                <svg viewBox="0 0 140 140" className="h-auto w-full">
                  <path d="M18.8 84.2h102.3c3.1 0 5.7-2.5 5.7-5.7v-5.7c0-7.9-6.3-14.2-14.2-14.2H86.1c-.8 0-1.5-.6-1.5-1.4V57l3.5-35.2C89.6 11.7 82.6 2.4 72.7.9S53.4 6.5 52 16.5c-.1.6-.1 1.2-.2 1.8-.1 1.2-.1 2.3 0 3.5L55.3 57c0 .4-.1.8-.4 1.1s-.7.5-1.1.5H27.3c-7.9 0-14.2 6.3-14.2 14.2v5.7c.1 3.1 2.6 5.7 5.7 5.7zM129 129.4c-5.1-7.9-7.8-17.1-7.8-26.5v-7.4c0-1.6-1.3-2.8-2.8-2.8H21.7c-1.6 0-2.8 1.3-2.8 2.8v7.4c0 9.4-2.7 18.6-7.8 26.5-1.8 2.6-1 6.1 1.7 7.9.9.6 2 .9 3.1.9h8.5c6.6 0 12.9-3.3 16.6-8.9 1.2-1.9 2.5-3.8 3.7-5.7.4-.7 1.3-.9 1.9-.4.4.3.7.7.7 1.2v8.1c0 3.1 2.5 5.7 5.7 5.7h71.2c3.1 0 5.7-2.5 5.7-5.7-.1-1.1-.3-2.2-.9-3.1z"></path>
                </svg>
              </div>
              <div className="bg-gray-300-400 my-2 flex flex-col items-center justify-center p-[3px]">
                <svg viewBox="0 0 140 140" className="h-auto w-full">
                  <path d="M53.358 125.72a7.257 7.257 0 01-5.221-2.205L4.9 79.105a13.166 13.166 0 010-18.228l43.237-44.41a7.292 7.292 0 0110.447 10.174l-40.25 41.317a2.917 2.917 0 000 4.084l40.25 41.311a7.292 7.292 0 01-5.25 12.379zM86.648 125.72a7.292 7.292 0 01-5.25-12.378l40.25-41.318a2.917 2.917 0 000-4.083l-40.25-41.312a7.292 7.292 0 0110.448-10.173l43.23 44.403a13.166 13.166 0 010 18.23L91.84 123.502a7.257 7.257 0 01-5.192 2.217zm37.999-54.676z"></path>
                </svg>
              </div> */}
            </div>
          </ScrollArea>
          <ScrollArea className="max-h-screen basis-[15%] overflow-y-auto border-r px-2 py-4 pl-0">
            <div className="section-header flex items-center justify-end">
              <Button
                variant={"secondary"}
                className=""
                onClick={() => dispatch(addScreen(selectedScreen))}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Screen
              </Button>
            </div>
            <div className="section-body">
              <ScreensList listSelected={listSelected} />
            </div>
          </ScrollArea>
          <ScrollArea
            className={` max-h-screen basis-[25%] overflow-y-auto border-r px-2 py-4 pl-0 ${
              listSelected ? "" : "hidden"
            }`}
          >
            <div className="section-header flex items-center justify-end">
              <Button
                variant={"secondary"}
                className=""
                onClick={() => dispatch(addScreen(selectedScreen))}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Header
              </Button>
            </div>
            <div className="">
              <div className="flex flex-col px-4">
                <div className="my-4 flex flex-row items-center ">
                  {" "}
                  <span data-state="closed" className="css-zjik7 e1fxto9k2">
                    <i className="flow-content-block-header-icon material-icons">
                      <svg viewBox="0 0 140 140 " className=" h-auto w-6">
                        <path
                          d="M5.3 109.4h26.2v26.2H5.3v-26.2zM5.1 17.7C5.1 25 11 31 18.3 31s13.3-6 13.3-13.3S25.7 4.4 18.3 4.4s-13.2 6-13.2 13.3zM48.4 22.2H135M48.4 74.7H135M48.4 127.2H135"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="8.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="23.333"
                        ></path>
                        <path
                          d="M5.5 81.1l12.9-25.8 12.9 25.8H5.5z"
                          stroke="currentColor"
                          stroke-width="8.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="23.333"
                        ></path>
                      </svg>
                    </i>
                  </span>
                  {/* <span data-state="closed" className="css-zjik7 e1fxto9k2">
                    <div
                      className="css-5a12sy e1kjoxcn1"
                      color="outline-light-gray"
                    >
                      <span className="css-1ja6lfh e1kjoxcn0 border-gra-y-300 flex flex-row items-center rounded-3xl border p-2">
                        <div className="">Desktop only</div>
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <rect
                              x="32"
                              y="48"
                              width="192"
                              height="144"
                              rx="16"
                              transform="translate(256 240) rotate(180)"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            ></rect>
                            <line
                              x1="160"
                              y1="224"
                              x2="96"
                              y2="224"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            ></line>
                            <line
                              x1="32"
                              y1="152"
                              x2="224"
                              y2="152"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            ></line>
                            <line
                              x1="128"
                              y1="192"
                              x2="128"
                              y2="224"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            ></line>
                          </svg>
                        </i>
                      </span>
                    </div>
                  </span> */}
                </div>
                <ul className="flex w-full flex-col items-center">
                  {arr.map((a, index) => (
                    <li className={`my-2 flex w-full flex-row items-center`}>
                      <div
                        className={` flex flex-row items-center justify-center`}
                      >
                        {/* <svg
                          width="800px"
                          height="800px"
                          viewBox="0 0 24 24"
                          fill="purple"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-auto w-8 cursor-pointer transition-colors duration-500 hover:bg-gray-100 ${
                            visible[index] ? "block" : "hidden"
                          }`}
                        >
                          <path
                            d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                            fill="#0F0F0F"
                          />
                        </svg> */}
                        <button
                          onClick={() => {
                            if (a.newField) {
                              setArr((prev) => {
                                const newArr = [...prev]
                                newArr.splice(index, 1)
                                return newArr
                              })
                            } else {
                              setArr((prev) => {
                                const newArr = [...prev]
                                newArr[index].newField = true
                                return newArr
                              })
                            }
                          }}
                          className={`mr-4  bg-gray-100 px-[8px] py-[4px] text-gray-500 transition-colors duration-500 hover:bg-gray-400 hover:text-white ${
                            a.newField ? "text-sm" : "text-xl"
                          }`}
                        >
                          {a.newField ? "\u{1F5D1}" : "\u00D7"}
                        </button>
                      </div>
                      {a.newField !== true ? (
                        a.img
                      ) : (
                        <div className="relative h-auto w-auto cursor-pointer rounded-lg border border-gray-500 bg-white">
                          <input
                            type="file"
                            accept="image/*"
                            className="w-7 cursor-pointer bg-red-400 opacity-0"
                            onChange={(
                              event: ChangeEvent<HTMLInputElement>
                            ) => {
                              const file =
                                (event.target &&
                                  event.target.files &&
                                  event.target.files[0]) ||
                                null
                              const reader = new FileReader()
                              reader.onloadend = () => {
                                const uploadedImage = reader.result
                                setArr((prev) => {
                                  const newArr = [...prev]
                                  newArr[index].img = (
                                    <img
                                      alt="Uploaded Image"
                                      className="block-option-image h-auto w-8"
                                      src={uploadedImage?.toString()}
                                    />
                                  )
                                  newArr[index].newField = false
                                  return newArr
                                })
                              }
                              if (file) {
                                reader.readAsDataURL(file)
                              }
                            }}
                          />
                        </div>
                      )}
                      <div className="ml-4 flex flex-col items-start">
                        <h3 className="text-sm">
                          <input
                            className="border-none outline-none"
                            type="text"
                            value={a.name}
                            onChange={(e) => {
                              setArr((prev) => {
                                const newArr = [...prev]
                                newArr[index].name = e.target.value
                                return newArr
                              })
                            }}
                          />
                        </h3>
                        <p className=" text-xs text-gray-500">
                          <input
                            className="border-none outline-none"
                            type="text"
                            value={a.description}
                            onChange={(e) => {
                              setArr((prev) => {
                                const newArr = [...prev]
                                newArr[index].description = e.target.value
                                return newArr
                              })
                            }}
                          />
                        </p>
                      </div>
                    </li>
                  ))}

                  <li className="flex w-full  flex-row items-center ">
                    <Button
                      className=" bg-white text-gray-600 transition-colors duration-500 hover:bg-white hover:shadow-xl"
                      onClick={() => {
                        setArr((prev) => {
                          const newArr = [...prev]
                          newArr.push({
                            img: (
                              <img
                                alt="Analytics and tracking"
                                className="block-option-image h-auto w-8"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSI+PC9yZWN0Pjxwb2x5bGluZSBwb2ludHM9IjIyNCAyMDggMzIgMjA4IDMyIDQ4IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjE2Ij48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9IjIwOCA2NCAxMjggMTQ0IDk2IDExMiAzMiAxNzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMTYiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iMjA4IDEwNCAyMDggNjQgMTY4IDY0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjE2Ij48L3BvbHlsaW5lPjwvc3ZnPg=="
                              />
                            ),
                            name: `Option ${arr.length + 1}`,
                            description: "I am a description",
                            visibile: false,
                            newField: true,
                          })
                          return newArr
                        })
                      }}
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      New Option
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollArea>
          <ScrollArea className="max-h-screen basis-[55%] overflow-y-auto border-r px-2 py-4 ">
            <div className="section-header flex items-center justify-between"></div>
            <div className="section-body">
              <Tabs
                defaultValue={VIEWS.DESKTOP}
                className="w-full"
                onValueChange={(value) => setView(value)}
              >
                <TabsContent
                  className={cn(
                    "page-container z-20 mx-auto box-content min-h-screen bg-background font-sans antialiased",
                    view == VIEWS.DESKTOP
                      ? "w-full border-0"
                      : "w-96 border px-4"
                  )}
                  value={view}
                >
                  <Frame data={currentScreen}></Frame>
                </TabsContent>
                <TabsList className="fixed bottom-2 left-[37%] z-20 grid w-40 grid-cols-2">
                  <TabsTrigger value={VIEWS.MOBILE}>Mobile</TabsTrigger>
                  <TabsTrigger value={VIEWS.DESKTOP}>Desktop</TabsTrigger>
                </TabsList>
              </Tabs>

              <SaveButton />
            </div>
          </ScrollArea>
          <ScrollArea className="max-h-screen basis-[15%] overflow-y-auto border-r px-2 py-4 ">
            <div className="section-header flex items-center justify-between">
              <h4 className="text-base font-normal tracking-tight"></h4>
            </div>
            <div className="section-body">
              <UserToolbox />
            </div>
          </ScrollArea>
          <ScrollArea className="max-h-screen basis-[15%] overflow-y-auto border-r px-2 py-4 pr-4">
            <div className="section-header flex items-center justify-between">
              <h4 className="text-base font-normal tracking-tight"></h4>
            </div>
            <div className="section-body overflow-y-auto">
              <SettingsPanel />
            </div>
          </ScrollArea>
        </div>
      </Editor>
    </div>
  )
}

CreateFlowComponent
