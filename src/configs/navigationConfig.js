import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20}/>,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "search",
    title: "Search map",
    type: "item",
    icon: <Icon.MapPin size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/search"
  },
  {
    id: "report",
    title: "Print report",
    type: "item",
    icon: <Icon.Printer size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/report"
  },
  {
    id: "share",
    title: "Share",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/share"
  },
  {
    id: "hire",
    title: "Hire an expert",
    type: "item",
    icon: <Icon.Search size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/hire"
  },
  {
    id: "setting",
    title: "Setting",
    type: "item",
    icon: <Icon.Sliders size={20} style={{'transform': 'rotate(-90deg)'}} />,
    permissions: ["admin", "editor"],
    navLink: "/setting"
  }
]

export default navigationConfig
