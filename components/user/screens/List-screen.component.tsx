import React, { ChangeEvent, useState } from "react"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ListIcon } from "@/constant"
const Listscreen = ({ arr, setArr }) => {
  return (
    <div className="">
      <div className="flex flex-col px-4">
        <div className="my-4 flex flex-row items-center ">
          <span data-state="closed" className="css-zjik7 e1fxto9k2">
            <i className="flow-content-block-header-icon material-icons">
              {ListIcon}
            </i>
          </span>
        </div>
        <ul className="flex w-full flex-col items-center">
          {arr.map((a, index) => (
            <li className={`my-2 flex w-full flex-row items-center`}>
              <div className={` flex flex-row items-center justify-center`}>
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
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
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
  )
}

export default Listscreen
