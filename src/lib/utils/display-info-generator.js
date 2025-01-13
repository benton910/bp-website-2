// Let description == instrument you're playing OR the people you're playing with, 'ft. ___, ___ '
// Personnel = people in Royal Reds if bpRole=FRONTMAN, ELSE it's the name of person bp is backing if bpRole=SIDEMAN
export const generateDisplayInfo = (scProps) => {
    if (scProps.bpRole === 'SOLO') {
        return {
            title: 'SOLO @ ' + scProps.gigVenue,
            description: null
        }
    } else if (scProps.bpRole === 'DUO') {
        return {
            title: 'DUO w/ ' + scProps.personnel + ' @ ' + scProps.gigVenue,
            description: null
        }
    } else if (scProps.bpRole === 'FRONTMAN') {
        return {
            title: 'BP & The Royal Reds @ ' + scProps.gigVenue,
            description: 'ft. ' + scProps.personnel
        }
    } else if (scProps.bpRole === 'SIDEMAN') {
        return {
            title: 'w/ ' + scProps.personnel + ' @ ' + scProps.gigVenue,
            description: null
        }
    } else if (scProps.bpRole === 'OTHER') {
        return {
            title: '@ ' + scProps.gigVenue,
            description: null
        }
    }
};