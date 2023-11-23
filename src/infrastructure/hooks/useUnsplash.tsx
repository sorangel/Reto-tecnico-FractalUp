import { useEffect, useState } from "react";
import { unsplashService } from "../services/unsplash.service.tsx";

export interface UseUnsplashOptions {
  query: string;
  lang?: string;
}

export interface UseUnsplashReturn {
  pictures: any[];
}

export const useUnsplash = ({
  query,
  lang = "en",
}: UseUnsplashOptions): UseUnsplashReturn => {
  const [pictures, setPictures] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const apiResults = await unsplashService.search.getPhotos({
          query,
          lang: lang as any,
        });

        if (apiResults.response) {
          const { results } = apiResults.response;

          setPictures(results || []);
        } else setPictures([]);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  return { pictures };
};
