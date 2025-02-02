const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type propinaProps = {
  setPropina: React.Dispatch<React.SetStateAction<number>>;
  propina: number;
};

const Propina = ({ setPropina, propina }: propinaProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor="">{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={(e) => setPropina(+e.target.value)}
              checked={tip.value === propina}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default Propina;
