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
  const [levelRange, setLevelRange] = React.useState<number>(0)

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
                    {" "}
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
          <HelperInformation />

          <Reorder.Group values={screens} onReorder={handleReorder}>
            <Reorder.Item value={"screen"} className="relative">
              <ContextMenu>
                <ContextMenuTrigger>
                  <Card
                    className={
                      "mt-6 flex h-28 w-full flex-col items-center justify-center border border-blue-500  hover:cursor-pointer"
                    }
                    // onClick={() => dispatch(setSelectedScreen(index))}
                    onClick={() => {}}
                  >
                    <div className="flex h-[200px] w-full flex-row items-center justify-between  bg-white px-2">
                      <span>↔︎ Width</span>
                      <div className=" flex w-7/12 flex-row items-center justify-evenly rounded-sm bg-gray-300 px-3 py-2">
                        <button
                          className={`rounded-sm p-2  text-gray-700 ${
                            clickedBtn === "S" ? "bg-white " : ""
                          }`}
                          type="button"
                          onClick={() => setClickedBtn("S")}
                        >
                          S
                        </button>
                        <button
                          className={`rounded-sm  p-2 text-gray-700 ${
                            clickedBtn === "M" ? "bg-white " : ""
                          }`}
                          type="button"
                          onClick={() => setClickedBtn("M")}
                        >
                          M
                        </button>
                        <button
                          className={`rounded-sm  p-2  text-gray-700 ${
                            clickedBtn === "L" ? "bg-white " : ""
                          }`}
                          type="button"
                          onClick={() => setClickedBtn("L")}
                        >
                          L
                        </button>
                        <button
                          className={`h-auto w-8 rounded-sm  p-2 text-gray-700 ${
                            clickedBtn === "W" ? "bg-white " : ""
                          }`}
                          type="button"
                          onClick={() => setClickedBtn("W")}
                        >
                          ↔︎
                        </button>
                      </div>
                    </div>
                    <div className="flex h-[200px] w-full flex-row items-center justify-between  bg-white px-2">
                      <span>↑ Top</span>
                      <div className=" flex w-7/12 flex-row items-center justify-evenly rounded-sm bg-gray-300 px-3 py-2">
                        <div className="flex h-auto w-[50px] flex-row items-center">
                          <input
                            type="range"
                            min={0}
                            max={100}
                            step="1"
                            value={levelRange}
                            className="slider  h-2 w-full appearance-none rounded-full bg-gray-200 outline-none"
                          />

                          <div className=" w-12 text-center text-sm text-gray-700">
                            {levelRange}%
                          </div>
                        </div>
                      </div>
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