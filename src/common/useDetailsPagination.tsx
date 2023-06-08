import { useEffect, useRef, useState } from "react";

const useDetailsPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef<HTMLElement>(null);

  const lastIndex = currentPage * 20;
  const firstIndex = lastIndex - 20;

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [currentPage]);

  return {
    currentPage,
    setCurrentPage,
    firstIndex,
    lastIndex,
    ref,
  };
};

export default useDetailsPagination;
