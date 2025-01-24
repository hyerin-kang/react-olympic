const MedalItem = ({ item, handleDelete }) => {
  const { id, country, gold, silver, bronze } = item;

  return (
    <tr>
      <td>{country} </td>
      <td>{gold}</td>
      <td>{silver}</td>
      <td>{bronze}</td>
      <td>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default MedalItem;
