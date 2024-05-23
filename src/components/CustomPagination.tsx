import { Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

interface PaginationProps {
  overAllPages: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  perPageInNum: number;
}

const CustomPagination: React.FC<PaginationProps> = ({
  overAllPages,
  page,
  onChange,
  perPageInNum,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const cielOverAllPage = Math.ceil(overAllPages / perPageInNum);
  // console.log(cielOverAllPage);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Stack spacing={2} className="center my-5">
      <Pagination
        count={cielOverAllPage}
        page={page}
        size={width > 700 ? "large" : "small"}
        variant="outlined"
        shape="rounded"
        onChange={onChange}
      />
    </Stack>
  );
};

export default CustomPagination;
