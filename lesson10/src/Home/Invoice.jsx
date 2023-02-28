import { Outlet } from "react-router-dom"
export default function Invoice() {
    return (<div>
        <h1> INVOICES </h1>
        <Outlet />
    </div>)
}