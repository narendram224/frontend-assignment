/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useFetchWithAbort } from "../../hooks/useFetch";
import {
  API_PATH,
  BASE_API_URL,
  ITEM_PER_PAGE,
  STEP,
} from "../../utils/constant";
import { TABLE_HEADERS } from "../../utils/helper";
import Container from "../layout/Container";
import Pagination from "../ui/Pagination";
import Table, { tableRowProps } from "../ui/Table";
import Loading from "../ui/Loading";

const SaasLabTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, error, saasLabTableData, fetchedData } = useFetchWithAbort(
    `${BASE_API_URL}/${API_PATH}`,
    currentPage
  );

  const activeHandler = (page: number | null) => {
    setCurrentPage(page || 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <h1 className="heading">Saas Lab Task project</h1>
      <Table
        caption="Saas Lab Table"
        headers={TABLE_HEADERS}
        rows={saasLabTableData as tableRowProps[]}
      />
      <Pagination
        size={fetchedData?.length || 0}
        step={STEP}
        itemsPerPage={ITEM_PER_PAGE}
        onClickHandler={activeHandler}
      />
      {error && (
        <small data-testid="error" className="error">
          Error: {error.message}
        </small>
      )}
    </Container>
  );
};

export default SaasLabTableComponent;
