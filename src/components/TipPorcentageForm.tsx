const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-15",
    value: 0.15,
    label: "15%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
];
type TipPorcentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>,
  tip : number
};

export default function TipPorcentageForm({ setTip, tip }: TipPorcentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>

      <form>
        {tipOptions.map((option) => (
          <div key={option.id} className="flex items-center font-bold mt-2">
            <input
              type="radio"
              id={option.id}
              name="tip"
              value={option.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tip === option.value}
            />
            <label className="mx-4 " htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
