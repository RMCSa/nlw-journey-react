import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../components/button";

interface InviteGuestsStepProps {
    emailsToInvite: string[];
    openGuestsModal: () => void;
    openConfirmTripModal: () => void;
}

export function InviteGestsStep({
    emailsToInvite,
    openGuestsModal,
    openConfirmTripModal,
} : InviteGuestsStepProps) {
    return (
      <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <button
          onClick={openGuestsModal}
          className="flex items-center gap-2 flex-1 text-left"
        >
          <UserRoundPlus className="size-5 text-zinc-400" />
          {emailsToInvite.length ? (
            <span className="text-lg text-zinc-100  flex-1">
              {emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          ) : (
            <span className="text-lg text-zinc-400  flex-1">
              Quem estará na viagem?
            </span>
          )}
        </button>

        <div className=" w-px h-6 bg-zinc-800"></div>
        
        <Button
          //   disabled={!local || !date}
          onClick={openConfirmTripModal}
          variant="primary"
        >
          Confirmar viagem
          <ArrowRight className="size-5" />
        </Button>
      </div>
    );
}