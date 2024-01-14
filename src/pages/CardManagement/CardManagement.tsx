import { useEffect } from "react";
import FormAddStudent from "../../components/CardManagement/FormAddStudent";
import TableStudents from "../../components/CardManagement/TableStudents";
import ClipboardCopy from "../../components/ClipBoardCopy/ClipBoardCopy";
import { ApiClient } from "../../services/api/ApiClient";

export const CardManagement = () => {
  return (
    <section className="relative h-full">
      <TableStudents />;
    </section>
  );
};
