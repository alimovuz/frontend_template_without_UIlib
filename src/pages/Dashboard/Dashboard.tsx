import Modal from "@/components/Modal/Modal";
import { useState } from "react";

const Dashboard = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Modalni ochish tugmasi */}
      <button
        onClick={openModal}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Modalni ochish
      </button>

      {/* Modal komponenti */}
      <Modal
        isOpen={isModalOpen}
        close={closeModal}
        header="Ma'lumot kiritish" // ixtiyoriy, bersangiz header ko'rinadi
        className="max-w-lg" // ixtiyoriy qo'shimcha class (masalan, kenglik uchun)
      >
        {/* Modal ichidagi kontent */}
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Bu modal ichidagi istalgan kontent bo'lishi mumkin. Form, rasm, matn va h.k.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Bekor qilish
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Saqlash
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Dashboard