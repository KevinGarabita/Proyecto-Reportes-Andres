export type StatsCardProps = {
  title: string;
  number: number;
};

function StatsCard({ title, number }: StatsCardProps) {
  return (
    <div className="card w-100 h-100 p-4 rounded-5">
      <div className="card-title d-flex">
        <span className="fw-bold">{title.toUpperCase()}</span>
      </div>
      <h3>{number}</h3>
    </div>
  );
}

export default StatsCard;
