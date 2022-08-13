import css from './Table.module.css';
export const Table = ({ data }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(list => (
          <tr key={list.id}>
            <td>{list.type}</td>
            <td>{list.amount}</td>
            <td>{list.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
