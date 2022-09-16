import { toast, TypeOptions } from 'react-toastify';

export default function useToast(
	type: TypeOptions | undefined,
	message: string
) {
	return toast(message, { type: type, className: 'toastStyle' });
}
