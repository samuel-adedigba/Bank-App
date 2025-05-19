export const formatDate = (iso: string) =>
    new Date(iso).toLocaleString('en-NG',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})
  