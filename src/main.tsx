import { render } from "preact"

import DownloadCV from "./blocks/DownloadCV"
import Header from "./blocks/Header"
import Summary from "./blocks/Summary"
import Contacts from "./blocks/Contacts"
import Admin from "./admin"

import "./assets/styles.css"

const Main = () => (
  <>
    <DownloadCV />
    <Header />
    <Summary />
    <Contacts />
  </>
)

const root = import.meta.env.VITE_ADMIN ? <Admin /> : <Main />;

render(root, document.getElementById('app')!)
