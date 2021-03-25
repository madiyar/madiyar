import React from "react"
import { Header } from ".."
import "./styles.css"

export default function Layout({ children }) {
  return <div>
    <Header />
    {children}
  </div>
}