/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  ERC20BurnMint,
  ERC20BurnMint_Approval,
  ERC20BurnMint_DefaultAdminDelayChangeCanceled,
  ERC20BurnMint_DefaultAdminDelayChangeScheduled,
  ERC20BurnMint_DefaultAdminTransferCanceled,
  ERC20BurnMint_DefaultAdminTransferScheduled,
  ERC20BurnMint_RoleAdminChanged,
  ERC20BurnMint_RoleGranted,
  ERC20BurnMint_RoleRevoked,
  ERC20BurnMint_Transfer,
} from "generated";

ERC20BurnMint.Approval.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.ERC20BurnMint_Approval.set(entity);
});

ERC20BurnMint.DefaultAdminDelayChangeCanceled.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_DefaultAdminDelayChangeCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.ERC20BurnMint_DefaultAdminDelayChangeCanceled.set(entity);
});

ERC20BurnMint.DefaultAdminDelayChangeScheduled.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_DefaultAdminDelayChangeScheduled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newDelay: event.params.newDelay,
    effectSchedule: event.params.effectSchedule,
  };

  context.ERC20BurnMint_DefaultAdminDelayChangeScheduled.set(entity);
});

ERC20BurnMint.DefaultAdminTransferCanceled.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_DefaultAdminTransferCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.ERC20BurnMint_DefaultAdminTransferCanceled.set(entity);
});

ERC20BurnMint.DefaultAdminTransferScheduled.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_DefaultAdminTransferScheduled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAdmin: event.params.newAdmin,
    acceptSchedule: event.params.acceptSchedule,
  };

  context.ERC20BurnMint_DefaultAdminTransferScheduled.set(entity);
});

ERC20BurnMint.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.ERC20BurnMint_RoleAdminChanged.set(entity);
});

ERC20BurnMint.RoleGranted.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.ERC20BurnMint_RoleGranted.set(entity);
});

ERC20BurnMint.RoleRevoked.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.ERC20BurnMint_RoleRevoked.set(entity);
});

ERC20BurnMint.Transfer.handler(async ({ event, context }) => {
  const entity: ERC20BurnMint_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.ERC20BurnMint_Transfer.set(entity);
});
