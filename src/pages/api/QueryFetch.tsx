import axios from "axios";

const apikey = process.env.NEXT_PUBLIC_API_KEY;

export interface PixabayImage {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export interface PixabayResponse {
  hits: PixabayImage[];
  total: number;
  totalHits: number;
}

export const fetchImages = async (): Promise<PixabayImage[]> => {
  try {
    const res = await axios.get<PixabayResponse>(
      `https://pixabay.com/api/?key=${apikey}&q=frontend+codes&image_type=photo`
    );
    return res.data.hits; 
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Failed to fetch images");
  }
};
