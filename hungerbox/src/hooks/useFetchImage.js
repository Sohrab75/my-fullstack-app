import { useEffect, useState } from "react";
import axios from "axios";

const useFetchImage = (query) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImage = async () => {
      const options = {
        method: 'GET',
        url: 'https://real-time-image-search.p.rapidapi.com/search',
        params: {
          query: query,
          limit: '1',
          size: 'any',
          color: 'any',
          type: 'any',
          time: 'any',
          usage_rights: 'any',
          file_type: 'any',
          aspect_ratio: 'any',
          safe_search: 'off',
          region: 'us'
        },
        headers: {
            'x-rapidapi-key': '4938eb527fmshdeddc1646ff2015p1419bcjsnd563e6bd0d2c',
            'x-rapidapi-host': 'real-time-image-search.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const thumbnail = response.data?.data?.[0]?.thumbnail_url;

        if (thumbnail) {
          setThumbnailUrl(thumbnail);
          localStorage.setItem(`img_${query}`, thumbnail); // ✅ store in localStorage
        } else {
          console.warn("No thumbnail_url found");
        }
      } catch (err) {
        console.error("Image Fetch Error:", err);
        setError(err);
      }
    };

    fetchImage();
  }, [query]);

  return { thumbnailUrl, error };
};

export default useFetchImage;
