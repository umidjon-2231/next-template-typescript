import {NextApiRequest, NextApiResponse} from "next";
import {ApiResponse} from "@/model/dto/ApiResponse";


function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<any>>) {
    try {

    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Something went wrong!",
            success: false,
            data: null,
        })
    }
}

export default handler;