import { LocalIcons } from "@/public/icons"
import {
  TIntegrationCardData,
  TSelectOptions,
  TArrItem,
  TSideBarItem,
} from "@/types"

export const DummyIntregationCardData: TIntegrationCardData[] = [
  {
    id: 1,
    title: "Email",
    description: "Recive an email every time a user submit their answer",
    image: LocalIcons.email,
    status: "active",
    alt: "intregation option",
  },
  {
    id: 2,
    title: "Google Sheets",
    description:
      "Send your data straight to Google Sheets. Automatically syncs as results come in.",
    image: LocalIcons.googleSheets,
    status: "Inactive",
    alt: "intregation option",
  },
  {
    id: 3,
    title: "Excel",
    description:
      "Send your typeform responses to Excel Online. Turn feedback into graphs, support quries into workflows, and much more.",
    image: LocalIcons.excel,
    status: "Inactive",
    alt: "intregation option",
  },
]

export const InsightsDevices: TSelectOptions[] = [
  {
    id: 1,
    value: "All Devices",
    label: "All Devices",
  },
  {
    id: 2,
    value: "Desktop",
    label: "Desktop",
  },
  {
    id: 3,
    value: "Mobile",
    label: "Mobile",
  },
  {
    id: 4,
    value: "Tablet",
    label: "Tablet",
  },
]

export const array: TArrItem[] = [
  {
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="h-auto w-8"
      >
        <rect width="256" height="256" fill="none"></rect>
        <rect
          x="64"
          y="24"
          width="128"
          height="208"
          rx="16"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></rect>
        <line
          x1="64"
          y1="56"
          x2="192"
          y2="56"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <line
          x1="64"
          y1="200"
          x2="192"
          y2="200"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    ),
    name: "User Friendly",
    description: "Saves time and frustration",
    visibile: false,
    newField: false,
  },

  {
    img: (
      <img
        alt="Seamless and elegant"
        className="block-option-image h-auto w-8"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnMvPjx0aXRsZT5jb2xvci1icnVzaC1wYWludDwvdGl0bGU+PHBhdGggZD0iTTEwLjYyMSwxNy44NzljMS41ODktMS45LjEtNC4zMzgsMS41MTMtNS45ODFhMi43NTksMi43NTksMCwxLDEsNC4xNzksMy42QTYuNSw2LjUsMCwwLDEsMTAuNjIxLDE3Ljg3OVoiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IGN1cnJlbnRDb2xvcjsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyBzdHJva2Utd2lkdGg6IDEuNXB4OyIvPjxwYXRoIGQ9Ik0xNi42LDEyLjI5MWw2LjIzMS04LjI1M0EyLjAzOCwyLjAzOCwwLDEsMCwxOS4zNzcsMS45bC00LjUzLDkuMTE2IiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiBjdXJyZW50Q29sb3I7IHN0cm9rZS1saW5lY2FwOiByb3VuZDsgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsgc3Ryb2tlLXdpZHRoOiAxLjVweDsiLz48cGF0aCBkPSJNNy41NTcsMTcuMDdDMi4yNTcsMTUuNzI3LDQuMzM1LDEyLjk1NCwyLDEyLjk1NGMtMy4wMzYsMC0uMDg4LDYuOTY4LDQuODkyLDkuNTU1YTcuNDU5LDcuNDU5LDAsMCwwLDguMzg5LTEuNDM1bC4wODEtLjA4MiIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogY3VycmVudENvbG9yOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7IHN0cm9rZS13aWR0aDogMS41cHg7Ii8+PC9zdmc+"
      />
    ),
    name: "Seamless and Elegant",
    description: "It's fun to work with",
    visibile: false,
    newField: false,
  },

  {
    img: (
      <img
        alt="Secure and private"
        className="block-option-image h-auto w-8"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnMvPjx0aXRsZT5zaGllbGQtY2hlY2stMTwvdGl0bGU+PHBhdGggZD0iTTIuMjUsMy45MjN2Ny42MTRBMTEuOTA3LDExLjkwNywwLDAsMCw5Ljg4MiwyMi42NWwxLjA0MS40YTMsMywwLDAsMCwyLjE1NCwwbDEuMDQxLS40QTExLjkwNywxMS45MDcsMCwwLDAsMjEuNzUsMTEuNTM3VjMuOTIzYTEuNDg3LDEuNDg3LDAsMCwwLS44NjgtMS4zNjJBMjEuNywyMS43LDAsMCwwLDEyLC43NSwyMS43LDIxLjcsMCwwLDAsMy4xMTgsMi41NjEsMS40ODcsMS40ODcsMCwwLDAsMi4yNSwzLjkyM1oiIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IGN1cnJlbnRDb2xvcjsgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOyBzdHJva2UtbGluZWpvaW46IHJvdW5kOyBzdHJva2Utd2lkdGg6IDEuNXB4OyIvPjxwYXRoIGQ9Ik0xNy4yLDExLjI1YTUuMjUsNS4yNSwwLDEsMS01LjItNiIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogY3VycmVudENvbG9yOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7IHN0cm9rZS13aWR0aDogMS41cHg7Ii8+PHBhdGggZD0iTTE3LjI1LDYuNTYybC00Ljc4Niw0Ljc4NmEuNjU3LjY1NywwLDAsMS0uOTI4LDBsLTEuNS0xLjUwNSIgc3R5bGU9ImZpbGw6IG5vbmU7IHN0cm9rZTogY3VycmVudENvbG9yOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IHN0cm9rZS1saW5lam9pbjogcm91bmQ7IHN0cm9rZS13aWR0aDogMS41cHg7Ii8+PC9zdmc+"
      />
    ),
    name: "Secure and private",
    description: "Your data is private",
    visibile: false,
    newField: false,
  },
  {
    img: (
      <img
        alt="Analytics and tracking"
        className="block-option-image h-auto w-8"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyNTYgMjU2Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSI+PC9yZWN0Pjxwb2x5bGluZSBwb2ludHM9IjIyNCAyMDggMzIgMjA4IDMyIDQ4IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjE2Ij48L3BvbHlsaW5lPjxwb2x5bGluZSBwb2ludHM9IjIwOCA2NCAxMjggMTQ0IDk2IDExMiAzMiAxNzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMTYiPjwvcG9seWxpbmU+PHBvbHlsaW5lIHBvaW50cz0iMjA4IDEwNCAyMDggNjQgMTY4IDY0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjE2Ij48L3BvbHlsaW5lPjwvc3ZnPg=="
      />
    ),
    name: "Analytics and tracking",
    description: "Understand your Users behaviour",
    visibile: false,
    newField: false,
  },
]

export const sideBar: TSideBarItem[] = [
  {
    img: (
      <svg viewBox="0 0 140 140" className="h-auto w-6">
        <path d="M21 21c-.583 1.167-1.167 2.333-1.167 3.5v47.833c0 2.334 1.75 4.084 4.084 4.084h35c2.333 0 4.083-1.75 4.083-4.084V24.5c0-2.333-1.75-4.083-4.083-4.083h-35c-.584-.584-1.75 0-2.917.583zM115.5 19.833h-35c-2.333 0-4.083 1.75-4.083 4.084V45.5c0 2.333 1.75 4.083 4.083 4.083h35c2.333 0 4.083-1.75 4.083-4.083v-21c.584-2.333-1.75-4.667-4.083-4.667zM62.417 119c.583-.583 1.166-1.75 1.166-2.917V94.5c0-2.333-1.75-4.083-4.083-4.083h-35c-2.333 0-4.083 1.75-4.083 4.083v21.583c0 2.334 1.75 4.084 4.083 4.084h35c.583 0 1.75-.584 2.917-1.167zM115.5 63.583h-35c-2.333 0-4.083 1.75-4.083 4.084V115.5c0 2.333 1.75 4.083 4.083 4.083h35c2.333 0 4.083-1.75 4.083-4.083V67.667c.584-2.334-1.75-4.084-4.083-4.084z"></path>
      </svg>
    ),
    selected: true,
  },
  {
    img: (
      <svg viewBox="0 0 140 140" className="h-auto w-6">
        <path d="M13.2 71C24.7 82.5 41.9 86.1 57 80.1c1.1-.4 2.3-.2 3.1.6l54.4 54.5c5.8 5.7 15.1 5.6 20.7-.2 1.2-1.2 2.2-2.7 2.9-4.2 2.4-5.7 1-12.3-3.5-16.6L80.5 60c-.8-.8-1-2-.6-3.1 5.9-15.1 2.3-32.3-9.3-43.8C59.9 2.2 43.9-2 29.1 2.4c-.4.1-.8.4-1.2.7-1.1 1.1-1.1 3 0 4.1L48.6 28c.6.6.9 1.5.8 2.3L48 45.4c-.1 1.4-1.2 2.5-2.6 2.6l-15.1 1.4c-.9.1-1.7-.2-2.3-.8L7.3 27.9c-.3-.3-.7-.6-1.2-.7-1.5-.5-3.2.3-3.7 1.9C-2 44 2.2 60.1 13.2 71z"></path>
      </svg>
    ),
    selected: false,
  },
  {
    img: (
      <svg viewBox="0 0 140 140" className="h-auto w-6">
        <path d="M18.8 84.2h102.3c3.1 0 5.7-2.5 5.7-5.7v-5.7c0-7.9-6.3-14.2-14.2-14.2H86.1c-.8 0-1.5-.6-1.5-1.4V57l3.5-35.2C89.6 11.7 82.6 2.4 72.7.9S53.4 6.5 52 16.5c-.1.6-.1 1.2-.2 1.8-.1 1.2-.1 2.3 0 3.5L55.3 57c0 .4-.1.8-.4 1.1s-.7.5-1.1.5H27.3c-7.9 0-14.2 6.3-14.2 14.2v5.7c.1 3.1 2.6 5.7 5.7 5.7zM129 129.4c-5.1-7.9-7.8-17.1-7.8-26.5v-7.4c0-1.6-1.3-2.8-2.8-2.8H21.7c-1.6 0-2.8 1.3-2.8 2.8v7.4c0 9.4-2.7 18.6-7.8 26.5-1.8 2.6-1 6.1 1.7 7.9.9.6 2 .9 3.1.9h8.5c6.6 0 12.9-3.3 16.6-8.9 1.2-1.9 2.5-3.8 3.7-5.7.4-.7 1.3-.9 1.9-.4.4.3.7.7.7 1.2v8.1c0 3.1 2.5 5.7 5.7 5.7h71.2c3.1 0 5.7-2.5 5.7-5.7-.1-1.1-.3-2.2-.9-3.1z"></path>
      </svg>
    ),
    selected: false,
  },
  {
    img: (
      <svg viewBox="0 0 140 140" className="h-auto w-6">
        <path d="M53.358 125.72a7.257 7.257 0 01-5.221-2.205L4.9 79.105a13.166 13.166 0 010-18.228l43.237-44.41a7.292 7.292 0 0110.447 10.174l-40.25 41.317a2.917 2.917 0 000 4.084l40.25 41.311a7.292 7.292 0 01-5.25 12.379zM86.648 125.72a7.292 7.292 0 01-5.25-12.378l40.25-41.318a2.917 2.917 0 000-4.083l-40.25-41.312a7.292 7.292 0 0110.448-10.173l43.23 44.403a13.166 13.166 0 010 18.23L91.84 123.502a7.257 7.257 0 01-5.192 2.217zm37.999-54.676z"></path>
      </svg>
    ),
    selected: false,
  },
]

export const ListIcon = (
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
)

export const detailsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path d="M156,128a28,28,0,1,1-28-28A28.1,28.1,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28.1,28.1,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28.1,28.1,0,0,0,128,180Z"></path>
  </svg>
)
