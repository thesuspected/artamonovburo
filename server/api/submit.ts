import axios from "axios"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const res = await axios.post("https://b24-j3ij06.bitrix24.ru/rest/1/coenqslj33gs0owj/crm.lead.add", {
        fields: {
            NAME: body.name,
            PHONE: [
                {
                    VALUE: body.phone,
                },
            ],
            SOURCE_ID: "WEB",
            SOURCE_DESCRIPTION: body.from,
            COMMENTS: body.quiz ?? "",
        },
        params: {
            REGISTER_SONET_EVENT: "Y",
        },
    }, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })

    return res.data.result
})