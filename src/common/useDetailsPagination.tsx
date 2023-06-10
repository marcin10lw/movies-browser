import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { detailsTilesPerPage } from "./detailsTilesPerPage";

const useDetailsPagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { id } = useParams();
  const ref = useRef<HTMLElement>(null);

  const lastIndex = currentPage * detailsTilesPerPage;
  const firstIndex = lastIndex - detailsTilesPerPage;

  useEffect(() => {
    if (!ref.current) return;

    ref.current.scrollIntoView();
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return {
    currentPage,
    setCurrentPage,
    firstIndex,
    lastIndex,
    ref,
  };
};

export default useDetailsPagination;
