import AccountForm from "./AccountForm.tsx";

function Register({
  openModal,
  closeModal,
  modalOpen,
  editModal,
  existingUser,
  updateCallback,
}) {
  return (
    <div>
      {/* <button className="flex justify-center self-center" onClick={openModal}>
        Register
      </button> */}
      {modalOpen && (
        <div className="flex flex-col z-1 mx-48 overflow-auto bg-slate-300 opacity-80">
          <div className="bg-color-white mx-8 my-auto p-6 border rounded-xl border-slate-300 w-4/5">
            <span
              className="bg-slate-300 float-right font-bold text-md"
              onClick={closeModal}
            >
              &times;
            </span>
            <AccountForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
