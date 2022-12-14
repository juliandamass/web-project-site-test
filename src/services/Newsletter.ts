import axios from "axios";

import { SubscribeNewsletterPayload } from "../types/SubscribeNewsletterPayload";

import { ServerConfig } from "../configs/ServerConfig";

const publicFrontendUrl = ServerConfig.getPublicFrontendUrl();

export const subscribeNewsletter = async (payload: SubscribeNewsletterPayload) => {
  try {
    const response = await axios.post(`${publicFrontendUrl}/api/home/subscribe-newsletter`, payload);
    return response;
  } catch (error: any) {
    throw error.response;
  }
};
