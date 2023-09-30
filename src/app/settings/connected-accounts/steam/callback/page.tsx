import SharkApi, { authApi } from "@/lib/api";
import { SteamAuthSchema } from "sharkservers-sdk"
import * as qs from "querystring"
import { redirect } from "next/navigation";

export default async function SteamCallback({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) {
    try {
        const api = await authApi(SharkApi)
        console.log(searchParams);
        const params: SteamAuthSchema = {
            openid_assoc_handle: searchParams["openid.assoc_handle"] || '',
            openid_claimed_id: searchParams["openid.claimed_id"] || '',
            openid_identity: searchParams["openid.identity"] || '',
            openid_mode: searchParams["openid.mode"] || '',
            openid_ns: searchParams["openid.ns"] || '',
            openid_op_endpoint: searchParams["openid.op_endpoint"] || '',
            openid_response_nonce: searchParams["openid.response_nonce"] || '',
            openid_return_to: searchParams["openid.return_to"] || '',
            openid_sig: searchParams["openid.sig"] || '',
            openid_signed: searchParams['openid.signed'] || ''
        }
        const response = await api.users.connectSteamProfile(params)
        console.log(response)
    } catch (e) {
        console.error(e.body["detail"])
        throw new Error(e.body["detail"])
    } finally {
        redirect("/settings/connected-accounts")
    }
}