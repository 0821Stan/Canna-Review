function DispensaryList({ dispensaries }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Dispensaries</h2>
      <ul className="space-y-2">
        {dispensaries.map((d) => (
          <li key={d.id} className="p-2 border rounded">
            {d.name} — {d.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DispensaryList;
