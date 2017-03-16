export const DOMAIN_URL = '/';
export const API_URL = '';
export const BASE_URL = `${DOMAIN_URL}${API_URL}`;

export const INSTAGRAM_AUTH_TOKEN = '1632422781.0cf4cd7.a07484a4a5dd4ef3a0f6a0cd004235a5';
export const INSTAGRAM_USER_ID = 1632422781;
export const INSTAGRAM_PHOTOS_NUMBER = 4;
export const INSTAGRAM_URL = `https://api.instagram.com/v1/users/${INSTAGRAM_USER_ID}/media/recent?access_token=${INSTAGRAM_AUTH_TOKEN}&count=${INSTAGRAM_PHOTOS_NUMBER}`;
