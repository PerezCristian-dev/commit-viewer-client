import { CommentReponse } from "@/interfaces/viewer-api.interface";
import React from "react";
import { Comment } from "../../interfaces/viewer-api.interface";
import { CommentCard } from "../commits/CommentCard";

interface ModalProps {
  title: string;
  onClose: () => void;
  modalRef: React.RefObject<HTMLDialogElement>;
  modalContent?: Array<CommentReponse>;
}

export const ModalComponent: React.FC<ModalProps> = ({
  title,
  onClose,
  modalRef,
  modalContent,
}) => {
  console.log({ modalContent });
  return (
    <>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="max-h-[300px] overflow-auto">
            {modalContent?.map((comment) => (
              <CommentCard comment={comment} />
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
};
