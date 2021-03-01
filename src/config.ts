require('dotenv').config();

export const config = {
	AWS_REGION: process.env.AWS_REGION,
	AWS_MEDIA_BUCKET: process.env.AWS_MEDIA_BUCKET,
};
