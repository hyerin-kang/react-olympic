import MedalItem from "./MedalItem";

const MedalForm = ({ medalList, setMedalList }) => {
  const handleDelete = (id) => {
    //삭제하기
    const deleteList = medalList.filter(function (list) {
      return list.id !== id;
    });
    setMedalList(deleteList);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {medalList.map(function (item) {
          return (
            <MedalItem
              key={item.id}
              handleDelete={handleDelete}
              item={item}
            ></MedalItem>
          );
        })}
      </tbody>
    </table>
  );
};

export default MedalForm;
