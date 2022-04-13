import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Spiualeitig" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Fing s wort in 6 Versüech use. Nach jedem Versuech zeigt dir d Farb vom
        Chästli, wie näch du am gsuechte Wort gsi bisch.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dr Buechstabe «W» isch im gsuechte Wort am richtige Ort.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dr Buechstabe «L» chunt im gsuechte Wort vor, isch aber am fausche Ort.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dr Buechstabe «W» chunt im gsuechte Wort nid vor.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Das isch e Open Source Version vom Spiu «Wordle» vom Josh Wardle wo mir
        alli känne u liebe –{' '}
        <a
          href="https://github.com/daenub/react-wordle"
          className="underline font-bold"
        >
          Dr Code fingsch hie
        </a>{' '}
      </p>
    </BaseModal>
  )
}
