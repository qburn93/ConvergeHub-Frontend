import { rest } from "msw";

const baseURL = "https://converhub-backend.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({ "pk": 2, "username": "bogdansuperuser2", "email": "", "first_name": "", "last_name": "", "profile_id": 2, "profile_image": "https://res.cloudinary.com/ddvxnbm3h/image/upload/v1/media/images/logo.png_mfcloo" })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];