import { format, formatDistance } from 'date-fns';

export const FormatType = {
	ago: 'ago',
	fullDateTime: "fullDateTime",
	longDateAbbreviated: 'longDateAbbreviated',
};

export const formatDate = (value, formatType) => {
  switch(formatType) {
    case FormatType.longDateAbbreviated:
      return format(value, 'PPP');
    case FormatType.ago:
      return formatDistance(value, new Date());
    default:
      return format(value, 'P');
  }
}
