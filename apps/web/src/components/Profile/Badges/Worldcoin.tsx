import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { STATIC_IMAGES_URL } from '@hey/data/constants';
import type { Profile } from '@hey/lens';
import { Tooltip } from '@hey/ui';
import { Trans } from '@lingui/macro';
import type { FC } from 'react';

interface WorldcoinProps {
  profile: Profile;
}

const Worldcoin: FC<WorldcoinProps> = ({ profile }) => {
  if (!profile?.onChainIdentity?.worldcoin?.isHuman) {
    return null;
  }

  return (
    <Tooltip
      content={
        <span className="flex items-center space-x-1">
          <span>
            <Trans>Worldcoin verified</Trans>
          </span>
          <CheckCircleIcon className="h-4 w-4" />
        </span>
      }
      placement="top"
    >
      <img
        className="drop-shadow-xl"
        height={75}
        width={75}
        src={`${STATIC_IMAGES_URL}/badges/worldcoin.png`}
        alt="Worldcoin Badge"
        data-testid="profile-worldcoin-badge"
      />
    </Tooltip>
  );
};

export default Worldcoin;
