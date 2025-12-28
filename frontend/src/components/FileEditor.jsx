import toast from "react-hot-toast";

export default function FileEditor() {
  const sendNoUser = () => {
    toast.error("사용자가 존재하지 않습니다.");
  };

  const sendPassword = () => {
    const pw = prompt("비밀번호 입력");
    if (!pw) {
      toast("입력이 취소되었습니다.");
      return;
    }
    toast.success(`비밀번호는 ${pw} 입니다.`);
  };

  return (
    <div>
      <button onClick={sendNoUser}>
        사용자 없음
      </button>

      <button onClick={sendPassword}>
        비밀번호 전달
      </button>
    </div>
  );
}
