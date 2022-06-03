import { render } from "preact"

import DownloadCV from "./blocks/DownloadCV"
import Header from "./blocks/Header"
import Summary from "./blocks/Summary"
import Contacts from "./blocks/Contacts"

import "./assets/styles.css"

const Main = () => (
  <>
    <DownloadCV />
    <Header />
    <Summary />
    <Contacts />
  </>
)

render(<Main />, document.getElementById('app')!)
