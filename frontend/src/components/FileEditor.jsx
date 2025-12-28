export default function FileEditor() {
  return (
    <>
      <button onClick={() => alert("사용자가 존재하지 않습니다.")}>
        사용자 없음
      </button>

      <button
        onClick={() => {
          const pw = prompt("비밀번호 입력");
          alert(`비밀번호는 ${pw} 입니다.`);
        }}
      >
        비밀번호 전달
      </button>
    </>
  );
}
