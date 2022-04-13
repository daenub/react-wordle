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
          value="N"
          status="correct"
        />
        <Cell value="I" />
        <Cell value="D" />
        <Cell value="S" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dr Buechstabe «N» isch im gsuechte Wort am richtige Ort.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="H" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="present"
        />
        <Cell value="T" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dr Buechstabe «U» chunt im gsuechte Wort vor, isch aber am fausche Ort.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="Ü" />
        <Cell value="Ü" />
        <Cell isRevealing={true} isCompleted={true} value="M" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dr Buechstabe «M» chunt im gsuechte Wort nid vor.
      </p>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        Faus es Wort nid agno wird, schrieb mer doch es Mail a{' '}
        <a className="underline" href="mailto:danbueschlen@gmail.com">
          danbueschlen@gmail.com
        </a>{' '}
        oder mach grad uf{' '}
        <a
          className="underline"
          href="https://github.com/daenub/react-wordle/pulls"
        >
          GitHub e Pull Request
        </a>{' '}
        uf.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Das isch e Open Source Version vom Spiu «Wordle» vom Josh Wardle wo mir
        aui kennä u liebe –{' '}
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
