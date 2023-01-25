import uz from "@/locales/uz";
import {Language} from "@/model/types/translate";

export type Dictionary = typeof uz
const dictionary={
    uz,
}

export default dictionary as Record<Language, typeof uz>