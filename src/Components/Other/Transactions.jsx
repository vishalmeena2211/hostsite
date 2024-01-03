import React from 'react';

// Tailwind CSS styles
import 'tailwindcss/tailwind.css';

// Custom styles
const styles = {
  card: 'h-full w-full border rounded shadow',
  cardHeader: 'bg-blue-500 py-4 px-6 rounded-t',
  cardBody: 'p-0 overflow-scroll',
  table: 'w-full min-w-max table-auto text-left',
  tableHead: 'bg-blue-50/50 border-b border-blue-100 p-4',
  tableRow: 'p-4 border-b border-blue-50',
  cardFooter: 'flex items-center justify-between border-t border-blue-50 p-4',
};


const TABLE_HEAD = ['Transaction', 'Amount', 'Date', 'Status', 'Account', ''];
const TABLE_ROWS = [
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    name: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    accountNumber: '1234',
    expiry: '06/2026',
  },
  // Add more rows as needed
];

// Component
function Transactions() {
  return (
    <div className={styles.card}>
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h5 className="text-xl font-bold text-white">Recent Transactions</h5>
            <p className="text-gray-300 mt-1">These are details about the last transactions</p>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-blue-300 rounded"
              />
            </div>
            <button className="flex items-center gap-3 p-2 bg-blue-500 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className={styles.cardBody}>
        <table className={styles.table}>
          {/* Table Head */}
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className={styles.tableHead}>
                  <p className="text-sm font-normal leading-none opacity-70">{head}</p>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Rows */}
          <tbody>
            {TABLE_ROWS.map((row, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? styles.tableRow : `${styles.tableRow} border-blue-50`;

              return (
                <tr key={row.name} className={classes}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={row.img}
                        alt={row.name}
                        className="h-10 w-10 object-cover border border-blue-50 bg-blue-50/50 p-1"
                      />
                      <p className="text-sm font-bold">{row.name}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-normal">{row.amount}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-normal">{row.date}</p>
                  </td>
                  <td className="p-4">
                    <div className="w-max">
                      <span
                        className={`inline-block text-xs uppercase font-semibold ${
                          row.status === 'paid'
                            ? 'text-green-500'
                            : row.status === 'pending'
                            ? 'text-amber-500'
                            : 'text-red-500'
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-12 rounded-md border border-blue-50 p-1">
                        <img
                          src={
                            row.account === 'visa'
                              ? 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png'
                              : 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png'
                          }
                          alt={row.account}
                          className="h-full w-full object-cover p-1"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs font-normal capitalize">
                          {row.account.split('-').join(' ')} {row.accountNumber}
                        </p>
                        <p className="text-xs font-normal opacity-70">{row.expiry}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <button className="p-2 bg-blue-50 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-blue-500"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Card Footer */}
      <div className={styles.cardFooter}>
        <button className="p-2 bg-blue-50 rounded">Previous</button>
        <div className="flex items-center gap-2">
          {[1, 2, 3, '...', 8, 9, 10].map((pageNumber) => (
            <button
              key={pageNumber}
              className={`p-2 rounded ${
                pageNumber === 1 ? 'bg-blue-50' : 'bg-white border border-blue-50'
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button className="p-2 bg-blue-50 rounded">Next</button>
      </div>
    </div>
  );
}

export default Transactions;
