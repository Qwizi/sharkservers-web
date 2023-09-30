import { redirect } from "next/navigation";
import * as qs from "querystring"

export default function RedirectToSteamLoginPage() {
    const steamAuthUrl = "https://steamcommunity.com/openid/login"
    const params = {
        "openid.ns": "http://specs.openid.net/auth/2.0",
        "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
        "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
        "openid.mode": "checkid_setup",
        "openid.return_to": "http://localhost:3000/settings/connected-accounts/steam/callback",
        "openid.realm": "http://localhost:3000",
    }
    const formatedParams = qs.stringify(params)
    const finalUrl = steamAuthUrl + "?" + formatedParams
    console.log(finalUrl)
    return redirect(finalUrl)
}