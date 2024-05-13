import React from "react"

const Sidebar = ({ sideBarArray, setListSelected, setSideBar }) => {
  return (
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
    </div>
  )
}

export default Sidebar
