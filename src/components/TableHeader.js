import Sort from "./Sort";
import InputCount from "./InputCount";
import Search from "./Search";

function TableHeader() {
  return (
    <div className="tableHeader">
      <div>ТАБЛИЦА ПОЛЬЗОВАТЕЛЕЙ</div>
      <div className="filters">
        <Search />
        <Sort />
        <InputCount />
      </div>
    </div>
  );
}

export default TableHeader;
