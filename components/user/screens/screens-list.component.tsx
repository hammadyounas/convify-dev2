"use client"

import React, { use } from "react"
import {
  Clipboard,
  ClipboardCopy,
  Delete,
  Edit,
  MousePointer,
  PlusCircle,
  Scissors,
  Trash2,
} from "lucide-react"
import { AnimatePresence, Reorder } from "framer-motion"

import { Editor, Element, Frame, useEditor } from "@/lib/craftjs"
import {
  addScreen,
  deleteScreen,
  duplicateScreen,
  reorderScreens,
  setScreens,
  setSelectedScreen,
} from "@/lib/state/flows-state/features/placeholderScreensSlice"
import { useAppDispatch, useAppSelector } from "@/lib/state/flows-state/hooks"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Separator } from "@/components/ui/separator"
import emptyScreenData from "@/components/user/screens/empty-screen.json"
import { ScreenFooter } from "@/components/user/screens/screen-footer.component"
import { ScreenHeader } from "@/components/user/screens/screen-header.component"

import { DragDrop } from "./drag-drop-screens.component"
import { ButtonChoiceScreen } from "./screen-button-choice.component"
import { ScreenOneChoice } from "./screen-one-choice.component"
import { ScreenOneInput } from "./screen-one-input.component"
import style from './screenns.module.css'
const ScreensList = () => {
  const screens = useAppSelector((state) => state.screen.screens)
  const dispatch = useAppDispatch()
  const selectedScreen = useAppSelector(
    (state) => state.screen.screens[state.screen.selectedScreen]
  )
  const selectedScreenIndex = useAppSelector(
    (state) => state.screen.selectedScreen
  )
  const { actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }))
  const [orderScreens, setOrderScreens] = React.useState<any[]>(screens)
  React.useEffect(() => {
    if (screens.length >= 0) {
      actions.deserialize(selectedScreen || emptyScreenData)
    }
  }, [actions, selectedScreen, screens])
  const handleReorder = (data) => {
    dispatch(setScreens(data))
  }
  const [clickedBtn, setClickedBtn] = React.useState<string>("S")
  const [visibility, setVisibility] = React.useState<string>("desktop")
  const [TopLevelRange, setTopLevelRange] = React.useState('0px');
  const [bottomLevelRange, setBottomLevelRange] = React.useState('0px');
  const [columnsSpacingDesktop, setColumnsSpacingDesktop] = React.useState<number>(0);
  const [columnsSpacingMobile, setColumnsSpacingMobile] = React.useState<number>(0);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full overflow-x-hidden"
      defaultValue="item-2"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="uppercase hover:no-underline">
          Header & Footer
        </AccordionTrigger>
        <AccordionContent className="w-full">
          <p className="text-sm text-muted-foreground">Header</p>
          <ScreenHeader scale={0.6} />
          <Separator className="my-4" />
          <p className="text-sm text-muted-foreground">Footer</p>
          <ScreenFooter scale={0.6} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="uppercase hover:no-underline">
          Screens
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <HelperInformation />

          <Reorder.Group values={screens} onReorder={handleReorder}>
            {screens?.map((screen: any, index) => (
              <Reorder.Item
                key={screen?.ROOT?.nodes[0]}
                id={screen?.ROOT?.nodes[0]}
                value={screen}
                className="relative"
              >
                <ContextMenu>
                  <ContextMenuTrigger>
                    <Card
                      className={cn(
                        "mt-6 flex h-28 w-full flex-col items-center justify-center border p-4 hover:cursor-pointer",
                        {
                          "border-blue-500": selectedScreenIndex === index,
                        }
                      )}
                      onClick={() => dispatch(setSelectedScreen(index))}
                    >
                      <div className="text-sm text-muted-foreground">
                        {screen[screen?.ROOT?.nodes[0]]?.displayName ??
                          "New Screen"}
                      </div>
                    </Card>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem
                      className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                      onClick={() => dispatch(addScreen(index))}
                    >
                      <PlusCircle size={18} />
                      <span>Add screen</span>
                    </ContextMenuItem>
                    <ContextMenuItem
                      className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                      onClick={() => dispatch(duplicateScreen(index))}
                    >
                      <ClipboardCopy size={18} />
                      <span>Duplicate</span>
                    </ContextMenuItem>
                    <ContextMenuItem
                      className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                      onClick={() => dispatch(deleteScreen(index))}
                    >
                      <Trash2 size={18} />
                      <span>Delete</span>
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="uppercase hover:no-underline">
          Spacing
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">

          <Reorder.Group values={screens} onReorder={handleReorder}>

            <Reorder.Item value={"screen"} className="relative">
              <ContextMenu>
                <ContextMenuTrigger>
                  <Card
                    className="flex flex-col items-center w-full"
                  // onClick={() => dispatch(setSelectedScreen(index))}
                  >
                    {/* <div className="text-sm text-muted-foreground"> 
                           New Screen 
                      </div> */}
                    <div className="flex h-auto w-full flex-row items-center justify-between py-2">
                      <span className="text-xs md:text-md w-3/12 ">↔︎ Width</span>
                      <div className=" flex w-8/12  flex-row items-center justify-evenly rounded-sm  bg-gray-300  transition-colors duration-300 ease-in-out hover:bg-gray-400 px-1 py-2">
                        <button
                          className={`text-sm rounded-sm p-2  text-gray-700 ${clickedBtn === "S" ? "bg-white " : ""
                            }`}
                          type="button"
                          onClick={() => setClickedBtn("S")}
                        >
                          S
                        </button>
                        <button
                          className={`text-sm rounded-sm  p-2 text-gray-700 ${clickedBtn === "M" ? "bg-white " : ""
                            }`}
                          type="button"
                          onClick={() => setClickedBtn("M")}
                        >
                          M
                        </button>
                        <button
                          className={`text-sm rounded-sm  p-2  text-gray-700 ${clickedBtn === "L" ? "bg-white " : ""
                            }`}
                          type="button"
                          onClick={() => setClickedBtn("L")}
                        >
                          L
                        </button>
                        <button
                          className={`text-sm h-auto w-auto rounded-sm  p-2 text-gray-700 ${clickedBtn === "W" ? "bg-white " : ""
                            }`}
                          type="button"
                          onClick={() => setClickedBtn("W")}
                        >
                          ↔︎
                        </button>
                      </div>
                    </div>
                    <div className="flex h-auto w-full flex-row items-center justify-between py-2">
                      <span className="text-xs md:text-md w-3/12 ">↓ Bottom</span>
                      <div className=" flex w-8/12 flex-row items-center justify-evenly rounded-sm  bg-gray-300  transition-colors duration-300 ease-in-out hover:bg-gray-400 px-1 py-2">


                        <div className="w-7/12 flex flex-row items-center">
                          <input
                            type="range"
                            min={0}
                            max={100}
                            step="1"
                            value={parseInt(bottomLevelRange.slice(0,bottomLevelRange.length-2))}
                            onChange={(e) => setBottomLevelRange(e.target.value.concat('px'))}
                            className={`slider  bg-gray-200 appearance-none h-[2px] rounded-full outline-none w-full ${style.sliderInput}`}
                          />

                        </div>
                        <div className=" w-12 text-center text-sm text-gray-700">
                          {bottomLevelRange}
                        </div>
                      </div>
                    </div>
                    <div className="flex h-auto w-full flex-row items-center justify-between py-2">
                      <span className="text-xs md:text-md w-3/12 ">↑ Top</span>
                      <div className=" flex w-8/12 flex-row items-center justify-evenly rounded-sm  bg-gray-300  transition-colors duration-300 ease-in-out hover:bg-gray-400 px-1 py-2">

                      <div className="w-7/12 flex flex-row items-center ">
                          <input
                            type="range"
                            min={0}
                            max={100}
                            step="1"
                            value={TopLevelRange.slice(0,TopLevelRange.length-2)}
                            onChange={(e) => setTopLevelRange(e.target.value.concat('px'))}
                            className={`slider  bg-gray-200 appearance-none h-[2px] rounded-full outline-none w-full ${style.sliderInput}`}
                          />

                        </div>
                        <div className="   text-center text-sm text-gray-800 flex flex-row items-center">
                        <div className=" w-12 text-center text-sm text-gray-700">
                          {TopLevelRange}
                        </div>
                        </div>
                       
                      </div>
                    </div>
                  </Card>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem
                    className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                  // onClick={() => dispatch(addScreen(index))}
                  >
                    <PlusCircle size={18} />
                    <span>Add screen</span>
                  </ContextMenuItem>
                  <ContextMenuItem
                    className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                  // onClick={() => dispatch(duplicateScreen(index))}
                  >
                    <ClipboardCopy size={18} />
                    <span>Duplicate</span>
                  </ContextMenuItem>
                  <ContextMenuItem
                    className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                  // onClick={() => dispatch(deleteScreen(index))}
                  >
                    <Trash2 size={18} />
                    <span>Delete</span>
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </Reorder.Item>

          </Reorder.Group>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="uppercase hover:no-underline">
          Appearance
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">

          <Reorder.Group values={screens} onReorder={handleReorder}>

            <Reorder.Item value={"screen"} className="relative">
              <ContextMenu>
                <ContextMenuTrigger>
                  <Card
                    className="flex flex-col items-center w-full">
                    <div className="flex h-auto w-full flex-row items-center justify-between py-2">
                      <span className="text-xs md:text-md w-3/12 ">Visibility</span>
                      <div className=" flex w-8/12  flex-row items-center justify-evenly rounded-sm  bg-gray-300   px-1 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-400">
                        <button
                          className={`text-sm rounded-sm p-2  text-gray-700 ${visibility === "desktop" ? "bg-white " : ""
                            }`}
                          type="button"
                          onClick={() => setVisibility("desktop")}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="160" y1="224" x2="96" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="192" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
                        </button>
                        <button
                          className={`text-sm rounded-sm  p-2 text-gray-700 ${visibility === "mobile" ? "bg-white " : ""
                            }`}
                          type="button"
                          onClick={() => setVisibility("mobile")}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="64" y="24" width="128" height="208" rx="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="64" y1="56" x2="192" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="64" y1="200" x2="192" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
                        </button>
                        <button
                          className={`text-sm rounded-sm  p-2  text-gray-700 ${visibility === "hide" ? "bg-white " : ""
                            }`}
                          type="button"
                          onClick={() => setVisibility("hide")}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="201.1" y1="127.3" x2="224" y2="166.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="154.2" y1="149.3" x2="161.3" y2="189.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="101.7" y1="149.2" x2="94.6" y2="189.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="54.8" y1="127.3" x2="31.9" y2="167" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M32,104.9C48.8,125.7,79.6,152,128,152s79.2-26.3,96-47.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex h-auto w-full flex-row items-center justify-between py-2">
                      <span className="text-xs md:text-md w-3/12 ">Columns (Desktop)</span>
                      <div className=" flex w-8/12 flex-row items-center justify-evenly rounded-sm  bg-gray-300  transition-colors duration-300 ease-in-out hover:bg-gray-400 px-1 py-2">


                        <div className="w-7/12 flex flex-row items-center  justify-evenly">
                          <input
                            type="range"
                            min={0}
                            max={5}
                            step="1"
                            value={columnsSpacingDesktop}
                            onChange={(e) => setColumnsSpacingDesktop(parseInt(e.target.value))}
                            className={`slider  bg-gray-200 appearance-none h-[2px] rounded-full outline-none w-8/12 ${style.sliderInput}`}
                          />

                        </div>
                        <div className="  relative text-center text-sm text-gray-800 flex flex-row items-center">
                          {<input
                            type="number"
                            value={columnsSpacingDesktop}
                            onChange={(e) => setColumnsSpacingDesktop(parseInt(e.target.value) > 5 ? 5 : parseInt(e.target.value))}
                            className={`appearance-none h-auto outline-none bg-transparent w-10 ${style.inputWebKit}`}

                          />}
                          <span className="text-gray-600 absolute left-2">px</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-auto w-full flex-row items-center justify-between py-2">
                      <span className="text-xs md:text-md w-3/12 ">Columns (Mobile)</span>
                      <div className=" flex w-8/12 flex-row items-center justify-evenly rounded-sm  bg-gray-300  transition-colors duration-300 ease-in-out hover:bg-gray-400 px-1 py-2">


                        <div className="w-7/12 flex flex-row items-center justify-evenly">
                          <input
                            type="range"
                            min={0}
                            max={5}
                            step="1"
                            value={columnsSpacingMobile}
                            onChange={(e) => setColumnsSpacingMobile(parseInt(e.target.value))}
                            className={`slider  bg-gray-200 appearance-none h-[2px] rounded-full outline-none  w-8/12 ${style.sliderInput}`}
                          />

                        </div>
                        <div className=" relative text-center text-sm text-gray-800 flex flex-row items-center">
                          {<input
                            type="number"
                            value={columnsSpacingMobile}
                            onChange={(e) => setColumnsSpacingMobile(parseInt(e.target.value) > 5 ? 5 : parseInt(e.target.value))}
                            className={`appearance-none h-auto outline-none bg-transparent w-10 ${style.inputWebKit}`}

                          />}
                          <span className="text-gray-600 absolute left-2">px</span>
                      
                        </div>
                      </div>
                    </div>
                  </Card>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem
                    className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                  // onClick={() => dispatch(addScreen(index))}
                  >
                    <PlusCircle size={18} />
                    <span>Add screen</span>
                  </ContextMenuItem>
                  <ContextMenuItem
                    className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                  // onClick={() => dispatch(duplicateScreen(index))}
                  >
                    <ClipboardCopy size={18} />
                    <span>Duplicate</span>
                  </ContextMenuItem>
                  <ContextMenuItem
                    className="flex flex-row items-center gap-2 text-inherit hover:cursor-pointer"
                  // onClick={() => dispatch(deleteScreen(index))}
                  >
                    <Trash2 size={18} />
                    <span>Delete</span>
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </Reorder.Item>

          </Reorder.Group>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function HelperInformation() {
  return (
    <Card
      className={cn(
        "flex w-full flex-col items-center justify-center border border-gray-500 px-2 py-3 hover:cursor-pointer"
      )}
    >
      <div className="flex flex-row items-start gap-1 text-left">
        <MousePointer />
        <div>
          <h2 className="mb-1 text-base font-semibold uppercase text-gray-950 dark:text-slate-50">
            Right-click
          </h2>
          <p className="text-sm font-light">Click on a screen to edit it</p>
        </div>
      </div>
    </Card>
  )
}

function DisplayEditor() {
  const screens = useAppSelector((state) => state.screen.screens)

  return (
    <>
      <div>
        {screens.map((item: any, index: any) => {
          console.log(item.libraryContent)
          const htmlContent = item.libraryContent.outerHTML
          return (
            <div className="my-2 border-solid border-black" key={index}>
              <div>
                <p>{item.libraryName}</p>
              </div>
              <ul
                style={{
                  transform: "scale(0.178922)",
                  maxWidth: "150px",
                  height: "100px",
                }}
              >
                <Frame data={htmlContent} />
                {/* {item.libraryContent} */}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ScreensList
