import Block from "../assets/block2.png";
import Unblock from "../assets/unblock.png";
import Delete2 from "../assets/delete.png";


export default function Toolbar({ onBlock, onUnblock, onDelete, disabled }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <button
        className="text-white rounded border-blue-600"
        onClick={onBlock}
        disabled={disabled}
        title="Заблокировать выбранных"
      >
        <img className="w-[125px] cursor-pointer" src={Block} alt="" />
      </button>
      <button
        onClick={onUnblock}
        disabled={disabled}
        title="Разблокировать выбранных"
      >
        <img className="w-[60px] cursor-pointer" src={Unblock} alt="" />
      </button>
      <button
        onClick={onDelete}
        disabled={disabled}
        title="Удалить выбранных"
      >
        <img className="w-[60px] cursor-pointer" src={Delete2} alt="" />
      </button>
    </div>
  );
}
