import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="red"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
