export default function ComparisonTable({ rows, columns = ['Buying from app only', 'Buying from random seller', 'Working with trusted advisor'] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-slate-950 text-white">
          <tr>
            <th className="p-4">Review point</th>
            {columns.map((column) => <th key={column} className="p-4">{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-slate-100">
              {row.map((cell, index) => <td key={cell} className={`p-4 ${index === row.length - 1 ? 'font-semibold text-slate-950' : 'text-slate-600'}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

