export function DateFormater( date: string ): string
{

    const newDate = new Date( date )
    const year = newDate.getUTCFullYear()
    const month = `0${ newDate.getUTCMonth() + 1 }`.slice( -2 )
    const day = `0${ newDate.getUTCDate() }`.slice( -2 )
    return `${ day }/${ month }/${ year }`
}